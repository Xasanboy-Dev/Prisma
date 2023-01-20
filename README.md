# Prisma
My fisrt Prisma project
My first rest api project but this not that I have got finished it.


# How to installthe Prisma?

##### npm install prisma --save-dev
# How to initiakize the prisma project?

###### npx prisma init --datasource-provider postgresql

# How to install Prisma/client?
 
 #### npm install @prisma/client
# How to genereate your project in Prisma?

model Users {
  id String @id @default(uuid())
  name String
  lastname String?
}

model Cars {
  id  String @id @default(uuid())
  compName String
  model String
}

#### npx prisma generate 
