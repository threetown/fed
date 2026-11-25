## Github Actions

![overview-actions-simple](./img/overview-actions-simple.png)



### workflow file

* `.github/workflow/main.yaml`

```yaml
# Optional - The name of the workflow as it will appear in the "Actions" tab of the GitHub repository. If this field is omitted, the name of the workflow file will be used instead.
name: learn-github-actions

# Optional - The name for workflow runs generated from the workflow, which will appear in the list of workflow runs on your repository's "Actions" tab. This example uses an expression with the `github` context to display the username of the actor that triggered the workflow run. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#run-name)."
run-name: ${{ github.actor }} is learning GitHub Actions

# Specifies the trigger for this workflow. This example uses the `push` event, so a workflow run is triggered every time someone pushes a change to the repository or merges a pull request.  This is triggered by a push to every branch; for examples of syntax that runs only on pushes to specific branches, paths, or tags, see "[AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."
on: [push]

# Groups together all the jobs that run in the `learn-github-actions` workflow.
jobs:

# Defines a job named `check-bats-version`. The child keys will define properties of the job.
  check-bats-version:

# Configures the job to run on the latest version of an Ubuntu Linux runner. This means that the job will execute on a fresh virtual machine hosted by GitHub. For syntax examples using other runners, see "[AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)"
    runs-on: ubuntu-latest

# Groups together all the steps that run in the `check-bats-version` job. Each item nested under this section is a separate action or shell script.
    steps:

# The `uses` keyword specifies that this step will run `v4` of the `actions/checkout` action. This is an action that checks out your repository onto the runner, allowing you to run scripts or other actions against your code (such as build and test tools). You should use the checkout action any time your workflow will use the repository's code.
      - uses: actions/checkout@v4

# This step uses the `actions/setup-node@v4` action to install the specified version of the Node.js. (This example uses version 20.) This puts both the `node` and `npm` commands in your `PATH`.
      - uses: actions/setup-node@v4
        with:
          node-version: '20'

# The `run` keyword tells the job to execute a command on the runner. In this case, you are using `npm` to install the `bats` software testing package.
      - run: npm install -g bats

# Finally, you'll run the `bats` command with a parameter that outputs the software version.
      - run: bats -v

```



![overview-actions-event](./img/overview-actions-event.png)





### Virtual Machine

![actions-workflow-virtual-machine](./img/actions-workflow-virtual-machine.svg)





### Github flow

Github flow is a lightweight, branch-based workflow.

![github-flow](./img/github-flow.png)

* **Create a branch**：基于`master`创建新分支`feature`进行开发。

* **Make changes**：开发期间定期提交更改（commit and push your changes）到远程仓库`feature`分支

* **Create a pull request**：功能开发完成后，创建 **pull request** ，从而出发审核（审核可以是一系列自动化校验测试和Code Review）。

* **Address review comments**：解决Code Review留下的问题

* **Merge your pull request**：合并拉取请求

  ![github-flow-merge-pull-request](./img/github-flow-merge-pull-request.png)

* **Delete your branch**：删除已经合并的分支

  ![github-flow-delete-pull-request](./img/github-flow-delete-pull-request.png)















* [Understanding Github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)

* [Github flow](https://docs.github.com/get-started/using-github/github-flow)

  