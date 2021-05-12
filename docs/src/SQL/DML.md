#  DML(数据操作语言)

> 数据操作语言 (DML，**D**ata **M**anipulation **L**anguage ) 

## SQL SELECT

> The SELECT statement is used to select data from a database.
>
> 从数据库表中获取数据。

### 语法

```sql
# 查询表中具体字段
SELECT column_name,column_name FROM table_name;
```

或

```sql
# 全表查询
SELECT * FROM table_name;
```

## SQL SELECT DISTINCT

> The SELECT DISTINCT statement is used to return only distinct (different) values.
>
> 关键词 DISTINCT 用于返回唯一不同的值。

### 语法

```sql
SELECT DISTINCT column_name,column_name FROM table_name;
```

## SQL UPDATE

> The UPDATE statement is used to update existing records in a table.
>
> Update 语句用于修改表中现有的数据。

### 语法

```sql
UPDATE table_name
SET column1=value1,column2=value2,...
WHERE some_column=some_value;
```



## SQL DELETE

> The DELETE statement is used to delete records in a table.
>
> DELETE 语句用于删除表中的行。

### 语法

```sql
DELETE FROM table_name
WHERE some_column=some_value;
```

## SQL INSERT INTO

> The INSERT INTO statement is used to insert new records in a table.
>
> INSERT INTO 语句用于向表格中插入新的行。

### 语法

```sql
INSERT INTO table_name
VALUES (value1,value2,value3,...);
```

或

```sql
INSERT INTO table_name (column1,column2,column3,...)
VALUES (value1,value2,value3,...);
```



## SQL WHERE Clause

> The WHERE clause is used to extract only those records that fulfill a specified criterion.
>
> 如需有条件地从表中选取数据，可将 WHERE 子句添加到 SELECT 语句。

### 语法

```sql
SELECT column_name,column_name
FROM table_name
WHERE column_name operator value;
```



## SQL ORDER BY Keyword

> The ORDER BY keyword is used to sort the result-set by one or more columns.
>
> The ORDER BY keyword sorts the records in ascending order by default. To sort the records in a descending order, you can use the DESC keyword.
>
> ORDER BY 语句用于根据指定的列对结果集进行排序。
>
> ORDER BY 语句默认按照升序对记录进行排序。如果您希望按照降序对记录进行排序，可以使用 DESC 关键字。

### 语法

```sql
SELECT column_name, column_name
FROM table_name
ORDER BY column_name ASC|DESC, column_name ASC|DESC;
```

