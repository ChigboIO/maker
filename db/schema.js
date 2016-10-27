'use strict';

module.exports = { sequelizemetum: 
   { name: 
      { type: 'VARCHAR(255)',
        allowNull: false,
        defaultValue: undefined,
        primaryKey: true } },
  user: 
   { id: 
      { type: 'INTEGER',
        allowNull: true,
        defaultValue: undefined,
        primaryKey: true },
     name: 
      { type: 'VARCHAR(255)',
        allowNull: true,
        defaultValue: undefined,
        primaryKey: false },
     age: 
      { type: 'INTEGER',
        allowNull: true,
        defaultValue: undefined,
        primaryKey: false },
     sex: 
      { type: 'VARCHAR(255)',
        allowNull: true,
        defaultValue: undefined,
        primaryKey: false },
     createdAt: 
      { type: 'DATETIME',
        allowNull: false,
        defaultValue: undefined,
        primaryKey: false },
     updatedAt: 
      { type: 'DATETIME',
        allowNull: false,
        defaultValue: undefined,
        primaryKey: false } },
  book: 
   { id: 
      { type: 'INTEGER',
        allowNull: true,
        defaultValue: undefined,
        primaryKey: true },
     title: 
      { type: 'VARCHAR(255)',
        allowNull: true,
        defaultValue: undefined,
        primaryKey: false },
     author: 
      { type: 'VARCHAR(255)',
        allowNull: true,
        defaultValue: undefined,
        primaryKey: false },
     description: 
      { type: 'TEXT',
        allowNull: true,
        defaultValue: undefined,
        primaryKey: false },
     no_of_pages: 
      { type: 'INTEGER',
        allowNull: true,
        defaultValue: undefined,
        primaryKey: false },
     createdAt: 
      { type: 'DATETIME',
        allowNull: false,
        defaultValue: undefined,
        primaryKey: false },
     updatedAt: 
      { type: 'DATETIME',
        allowNull: false,
        defaultValue: undefined,
        primaryKey: false } } };
