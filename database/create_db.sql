CREATE TABLE IF NOT EXISTS user_role (
    role_id INT NOT NULL,
    role_name VARCHAR(36) NOT NULL,
    is_active CHAR(1) DEFAULT 'Y',
    create_date TIMESTAMP NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (role_id)
);

CREATE TABLE IF NOT EXISTS user_info (
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    role_id INT NOT NULL,
    firstname VARCHAR(36) NOT NULL,
    lastname VARCHAR(36) NOT NULL,
    email VARCHAR(36) NOT NULL,
    login_id VARCHAR(10),
    password VARCHAR(255) NOT NULL,
    card_id VARCHAR(13),
    line_id VARCHAR(20),
    grade VARCHAR(4),
    phone VARCHAR(10),
    is_active CHAR(1) DEFAULT 'Y',
    create_date TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (role_id) REFERENCES user_role (role_id)
);

CREATE TABLE IF NOT EXISTS scholarship_type (
    scholarship_type_id SERIAL PRIMARY KEY,
    scholarship_type_name VARCHAR(36) NOT NULL,
    is_active CHAR(1) DEFAULT 'Y',
    create_date TIMESTAMP NOT NULL DEFAULT current_timestamp
);
CREATE TABLE IF NOT EXISTS class_year_type (
    class_type_id SERIAL PRIMARY KEY,
    class_type_name VARCHAR(36) NOT NULL,
    is_active CHAR(1) DEFAULT 'Y',
    create_date TIMESTAMP NOT NULL DEFAULT current_timestamp
);

CREATE TABLE IF NOT EXISTS scholarship_info (
    scholarship_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    scholarship_name TEXT NOT NULL,
    scholarship_year VARCHAR(36) NOT NULL,
    scholarship_grade VARCHAR(4) NOT NULL,
    scholarship_type_id INT NOT NULL,
    class_type_id INT NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    create_date TIMESTAMP NOT NULL DEFAULT current_timestamp,
    is_active CHAR(1) DEFAULT 'Y',
    is_delete CHAR(1) DEFAULT 'Y',
    scholarship_file BYTEA,
    color_tag VARCHAR(36) NOT NULL,
    scholarship_condition TEXT,
    scholarship_qualification TEXT,
    FOREIGN KEY (scholarship_type_id) REFERENCES scholarship_type (scholarship_type_id),
    FOREIGN KEY (class_type_id) REFERENCES class_year_type (class_type_id)
);
CREATE TABLE IF NOT EXISTS subscribe_scholarship (
    subscribe_id UUID NOT NULL PRIMARY KEY,
    user_id UUID NOT NULL,
    scholarship_id UUID NOT NULL,
    is_active CHAR(1) DEFAULT 'Y',
    create_date TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (scholarship_id) REFERENCES scholarship_info (scholarship_id),
    FOREIGN KEY (user_id) REFERENCES user_info (user_id)
);
CREATE TABLE IF NOT EXISTS information (
    info_id UUID NOT NULL,
    user_id UUID NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    is_active CHAR(1) DEFAULT 'Y',
    create_date TIMESTAMP NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (info_id),
    FOREIGN KEY (user_id) REFERENCES user_info (user_id)
);
CREATE TABLE IF NOT EXISTS alert_scholarship (
    alert_id UUID NOT NULL PRIMARY KEY,
    user_id UUID NOT NULL,
    message_id UUID NOT NULL,
    scholarship_id UUID NOT NULL,
    is_active CHAR(1) DEFAULT 'Y',
    is_open CHAR(1) DEFAULT 'N',
    create_date TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (scholarship_id) REFERENCES scholarship_info (scholarship_id),
    FOREIGN KEY (user_id) REFERENCES user_info (user_id),
    FOREIGN KEY (message_id) REFERENCES message_alert (message_id)
);
CREATE TABLE IF NOT EXISTS message_alert (
    message_id UUID NOT NULL PRIMARY KEY,
    user_id UUID NOT NULL,
    scholarship_id UUID NOT NULL,
    description TEXT NOT NULL,
    is_active CHAR(1) DEFAULT 'Y',
    create_date TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (scholarship_id) REFERENCES scholarship_info (scholarship_id),
    FOREIGN KEY (user_id) REFERENCES user_info (user_id)
);