-- //VARCHAR(size)	A VARIABLE length string (can contain letters, numbers, and special characters). The size parameter specifies the maximum column length in characters - can be from 0 to 65535

-- //TABLE SCHEMA


 CREATE TABLE app_user (    
    id  SERIAL UNIQUE,
    email VARCHAR(250) UNIQUE,
    username VARCHAR(50) UNIQUE NOT NULL,
    "password" VARCHAR(50) NOT NULL,    
    household VARCHAR(50),
    is_parent BOOLEAN,
    balance FLOAT,
    active_goal INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "app_user_pk" PRIMARY KEY ("id") 
  );


CREATE TABLE household (
   "name" VARCHAR(50) UNIQUE NOT NULL, 
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
   CONSTRAINT "household_pk" PRIMARY KEY ("name") 
);


CREATE TABLE chore (
   id SERIAL UNIQUE,
   created_by INT NOT NULL,
   assigned_to INT,
   household VARCHAR(50) NOT NULL,
   "description" VARCHAR(250) NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
   completed_on TIMESTAMP,
   verified_on TIMESTAMP,
   reward FLOAT,
   CONSTRAINT "chore_pk" PRIMARY KEY ("id") 
);


CREATE TABLE goal (
   id SERIAL UNIQUE,
   "belongs_to" INT,
   "description" VARCHAR(250),
   dollar_value FLOAT,
   "image" VARCHAR(250),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
   CONSTRAINT "goal_pk" PRIMARY KEY ("id") 
);

ALTER TABLE app_user ADD CONSTRAINT "app_user_fk0" FOREIGN KEY ("household") REFERENCES household("name");
ALTER TABLE app_user ADD CONSTRAINT "app_user_fk1" FOREIGN KEY ("active_goal") REFERENCES goal("id");
ALTER TABLE chore ADD CONSTRAINT "chore_fk0" FOREIGN KEY ("created_by") REFERENCES app_user("id");
ALTER TABLE chore ADD CONSTRAINT "chore_fk1" FOREIGN KEY ("assigned_to") REFERENCES app_user("id");
ALTER TABLE chore ADD CONSTRAINT "chore_fk2" FOREIGN KEY ("household") REFERENCES household("name");
ALTER TABLE goal ADD CONSTRAINT "goal_fk0" FOREIGN KEY ("belongs_to") REFERENCES app_user("id");