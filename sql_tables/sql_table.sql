-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS class_year_type_class_type_id_seq;

-- Table Definition
CREATE TABLE "public"."class_year_type" (
    "class_type_id" int4 NOT NULL DEFAULT nextval('class_year_type_class_type_id_seq'::regclass),
    "class_type_name" varchar(36) NOT NULL,
    "is_active" bpchar(1) DEFAULT 'Y'::bpchar,
    "create_date" timestamp NOT NULL DEFAULT now(),
    PRIMARY KEY ("class_type_id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."information" (
    "info_id" uuid NOT NULL,
    "user_id" uuid NOT NULL,
    "title" varchar(36) NOT NULL,
    "description" text NOT NULL,
    "is_active" bpchar(1) DEFAULT 'Y'::bpchar,
    "create_date" timestamp NOT NULL DEFAULT now(),
    PRIMARY KEY ("info_id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."scholarship_info" (
    "scholarship_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "scholarship_name" varchar(36) NOT NULL,
    "scholarship_year" varchar(36) NOT NULL,
    "scholarship_grade" varchar(4) NOT NULL,
    "scholarship_type_id" int4 NOT NULL,
    "class_type_id" int4 NOT NULL,
    "start_date" timestamp NOT NULL,
    "end_date" timestamp NOT NULL,
    "create_date" timestamp NOT NULL DEFAULT now(),
    "is_active" bpchar(1) DEFAULT 'Y'::bpchar,
    "is_delete" bpchar(1) DEFAULT 'Y'::bpchar,
    "scholarship_file" bytea,
    "color_tag" varchar(36) NOT NULL,
    "scholarship_condition" text,
    "scholarship_qualification" text,
    CONSTRAINT "scholarship_info_scholarship_type_id_fkey" FOREIGN KEY ("scholarship_type_id") REFERENCES "public"."scholarship_type"("scholarship_type_id"),
    CONSTRAINT "scholarship_info_class_type_id_fkey" FOREIGN KEY ("class_type_id") REFERENCES "public"."class_year_type"("class_type_id"),
    PRIMARY KEY ("scholarship_id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS scholarship_type_scholarship_type_id_seq;

-- Table Definition
CREATE TABLE "public"."scholarship_type" (
    "scholarship_type_id" int4 NOT NULL DEFAULT nextval('scholarship_type_scholarship_type_id_seq'::regclass),
    "scholarship_type_name" varchar(36) NOT NULL,
    "is_active" bpchar(1) DEFAULT 'Y'::bpchar,
    "create_date" timestamp NOT NULL DEFAULT now(),
    PRIMARY KEY ("scholarship_type_id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."subscribe_scholarship" (
    "subscribe_id" uuid NOT NULL,
    "user_id" uuid NOT NULL,
    "scholarship_id" uuid NOT NULL,
    "is_active" bpchar(1) DEFAULT 'Y'::bpchar,
    "create_date" timestamp NOT NULL DEFAULT now(),
    PRIMARY KEY ("subscribe_id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."user_info" (
    "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "role_id" int4 NOT NULL,
    "firstname" varchar(36) NOT NULL,
    "lastname" varchar(36) NOT NULL,
    "email" varchar(36) NOT NULL,
    "login_id" varchar(10),
    "password" varchar(255) NOT NULL,
    "card_id" varchar(13),
    "line_id" varchar(20),
    "grade" varchar(4),
    "phone" varchar(10),
    "is_active" bpchar(1) DEFAULT 'Y'::bpchar,
    "create_date" timestamp NOT NULL DEFAULT now(),
    CONSTRAINT "user_info_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."user_role"("role_id"),
    PRIMARY KEY ("user_id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."user_role" (
    "role_id" int4 NOT NULL,
    "role_name" varchar(36) NOT NULL,
    "is_active" bpchar(1) DEFAULT 'Y'::bpchar,
    "create_date" timestamp NOT NULL DEFAULT now(),
    PRIMARY KEY ("role_id")
);

