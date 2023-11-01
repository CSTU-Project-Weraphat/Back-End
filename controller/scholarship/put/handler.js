const executeQuery = require("../../../utils/pool_connections")

const handlerEditScholarship = (req,res) => {
    const {
        scholarship_name,
        scholarship_year,
        scholarship_grade,
        description,
        class_type_id,
        start_date,
        end_date,
        scholarship_type_id,
        color_tag,
        scholarship_condition,
        scholarship_qualification,
        scholarship_id
      } = req.body;

    const updateScholarshipName = (scholarship_name) => {
        if (scholarship_name) {
            return `scholarship_name = '${scholarship_name.trim()}',`;
          }
          return "";
    }

    const updateScholarshipYear = (scholarship_year) => {
        if (scholarship_year) {
            return `scholarship_year = '${scholarship_year.trim()}',`;
          }
          return "";
    }

    const updateScholarshipgrade = (scholarship_grade) => {
        if (scholarship_grade) {
            return `scholarship_grade = '${scholarship_grade.trim()}',`;
          }
          return "";
    }

    const updateDescription = (description) => {
        if (description) {
            return `description = '${description.trim()}',`;
          }
          return "";
    }

    const updateScholarshipClassYearType = (class_type_id) => {
        if (class_type_id) {
            return `class_type_id = '${class_type_id}',`;
          }
          return "";
    }

    const updateScholarshipStartDate = (start_date) => {
        if (start_date) {
            return `start_date = '${start_date.trim()}',`;
          }
          return "";
    }

    const updateScholarshipEndDate = (end_date) => {
        if (end_date) {
            return `end_date = '${end_date.trim()}',`;
          }
          return "";
    }

    const updateScholarshipType = (scholarship_type_id) => {
        if (scholarship_type_id) {
            return `scholarship_type_id = '${scholarship_type_id}',`;
          }
          return "";
    }  

    const updateScholarshipColorTag = (color_tag) => {
        if (color_tag) {
            return `color_tag = '${color_tag.trim()}',`;
          }
          return "";
    }  

    const updateScholarshipCondition = (scholarship_condition) => {
        if (scholarship_condition) {
            return `scholarship_condition = '${scholarship_condition.trim()}',`;
        }
        return "";
    }    

    const updateScholarshipQualification = (scholarship_qualification) => {
        if (scholarship_qualification) {
            return `scholarship_qualification = '${scholarship_qualification.trim()}'`;
          }
          return "";
    }  

    const query = `UPDATE scholarship_info
    SET
        ${updateScholarshipName(scholarship_name)}
        ${updateScholarshipYear(scholarship_year)}
        ${updateScholarshipgrade(scholarship_grade)}
        ${updateDescription(description)}
        ${updateScholarshipClassYearType(class_type_id)}
        ${updateScholarshipStartDate(start_date)}
        ${updateScholarshipEndDate(end_date)}
        ${updateScholarshipType(scholarship_type_id)}
        ${updateScholarshipColorTag(color_tag)}
        ${updateScholarshipCondition(scholarship_condition)}
        ${updateScholarshipQualification(scholarship_qualification)}
    WHERE
        scholarship_id = '${scholarship_id}'`;

    executeQuery(query, (data) => {
        res.send({ success:data.rowCount === 1 });
    });
}
module.exports = handlerEditScholarship