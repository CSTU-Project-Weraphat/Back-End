const executeQuery = require("../../../utils/pool_connections")

const handlergetManageScholarship = (req,res) => {
    const {scholarship_id} = req.query
  const queryScholarshipId = (scholarship_id) =>{
    if(!scholarship_id){
        return ""
    }else{
        return `AND  scholarship_type.scholarship_type_id = '${scholarship_id}'`
    }
  }
    const query = `
    SELECT
        scholarship_info.scholarship_id,
        scholarship_info.scholarship_name,
        scholarship_info.scholarship_year,
        scholarship_info.scholarship_grade,
        scholarship_info.class_type_id,
        class_year_type.class_type_name,
        scholarship_info.scholarship_type_id,
        scholarship_type.scholarship_type_name,
        scholarship_info.start_date,
        scholarship_info.end_date,
        scholarship_info.color_tag,
        scholarship_info.scholarship_condition,
        scholarship_info.scholarship_qualification
    FROM
        scholarship_info
    INNER JOIN class_year_type ON class_year_type.class_type_id = scholarship_info.class_type_id
    INNER JOIN scholarship_type ON scholarship_type.scholarship_type_id = scholarship_info.scholarship_type_id
    WHERE
        EXTRACT(YEAR FROM CURRENT_TIMESTAMP) + 543 <= CAST(scholarship_info.scholarship_year AS integer)
    AND 
        scholarship_info.is_active = 'Y' 
    AND 
        scholarship_info.is_delete = 'Y'
    AND 
        CURRENT_TIMESTAMP <= scholarship_info.end_date
        
        ${queryScholarshipId(scholarship_id)}`

    executeQuery(query, (data) => {
        
        res.send({ result: data.rows});
      });
}

module.exports = handlergetManageScholarship