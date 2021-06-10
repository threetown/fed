const fs = require('fs');
const path = require('path');
const axios = require('axios');
const net = require('net');
const { spawn, execSync } = require('child_process');
const YAML = require('yamljs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const JSZIP = require('jszip');
const FormData = require('form-data');

const zip = new JSZIP();
const config = YAML.load(path.join(__dirname, './config.yml'));
let url, pPath;

// 显示代码所在分支
try {
    const stdout = execSync('git branch', { cwd: config.projectUrl });
    console.log(chalk.red.bgGreen('******注意代码所在分支******'));
    console.log(stdout.toString());

} catch (error) {
    console.log(chalk.red.bgGreen('没有监测到.git 文件，注意不要上传错了'));
}


// 选择配置
(async function () {
    const { client } = await inquirer.prompt([
        {
            name: "client",
            type: 'list',
            message: '选择要上传的客户端',
            choices: Object.keys(config.lists)
        }
    ]).then(answers => {
        if(answers.client == 'master'){
            console.log('master分支')
        }else{
            console.log(answers)
        }
    })


    const { serve } = await inquirer.prompt([
        {
            name: "serve",
            type: 'list',
            message: '选择要上传的服务器',
            choices: Object.keys(config.lists[client])
        }
    ])

    url = config.lists[client][serve].url;
    pPath = config.lists[client][serve].path;
    build()
})()


// 打包
function build() {
    const npm = spawn('npm', ['run build'], {
        cwd: config.projectUrl,
        shell: true
    });

    npm.stdout.on('data', (data) => {
        console.log(chalk.green(data));
    });

    npm.stderr.on('data', (data) => {
        console.log(chalk.red(data));
    });

    npm.on('close', (code) => {
        if (code === 0) {
            return compress()
        }
        console.log(chalk.red(`子进程退出，退出码 ${code}`));
    });
}

// 压缩
function compress() {

    console.log(chalk.blue('压缩中，请稍等!'));

    var distDir = zip.folder("dist");
    pushZip(distDir, path.join(config.projectUrl, './dist'));
    zip.generateAsync({
        type: 'nodebuffer',
        compression: 'DEFLATE',
        compressionOptions: {
            level: 9
        }
    }).then(function (content) {
        fs.writeFile(path.resolve(__dirname, './dist.zip'), content, err => {
            if (err) throw err;
            console.log(chalk.blue('压缩成功!'));
            upload()
        });
    });
}


// 压缩方法
function pushZip(floder, pPath) {
    const files = fs.readdirSync(pPath, { withFileTypes: true });
    files.forEach(dirent => {
        let filePath = `${pPath}/${dirent.name}`;
        if (dirent.isDirectory()) {
            let dirlist = floder.folder(dirent.name);
            pushZip(dirlist, filePath);
        } else {
            floder.file(dirent.name, fs.readFileSync(filePath));
        }
    });
}

// 上传
function upload() {
    console.log(chalk.blue('上传中，请稍等!'));
    const localFile = fs.createReadStream(path.resolve(__dirname, './dist.zip'));
    const formData = new FormData();
    formData.append('path', pPath);
    formData.append('file', localFile);
    var headers = formData.getHeaders();

    formData.getLength(async function (err, length) {
        if (err) {
            return;
        }
        headers['content-length'] = length;
        await axios.post(url, formData, { headers }).then(res => {
            console.log('执行结果: ', res.data);
         /*    const clt = net.createConnection(6666, '127.0.0.1');
            clt.end(JSON.stringify(res.data)); */

        }).catch(res => {
            console.log(res);
        })

    })

}