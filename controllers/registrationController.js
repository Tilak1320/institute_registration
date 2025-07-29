const pool = require("../config/db");

exports.registerInstitute = async (req, res) => {
  const { name, instituteTypeId } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO institutes (name, institute_type_id) VALUES ($1, $2) RETURNING *",
      [name, instituteTypeId]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.registerSchool = async (req, res) => {
  const { instituteId, boardId, mediumId, classCategoryId, standardId, subjectIds } = req.body;
  try {
    const schoolRes = await pool.query(
      `INSERT INTO school_registrations 
       (institute_id, board_id, medium_id, class_category_id, standard_id) 
       VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [instituteId, boardId, mediumId, classCategoryId, standardId]
    );

    const regId = schoolRes.rows[0].id;
    for (let subjectId of subjectIds) {
      await pool.query(
        "INSERT INTO school_registration_subjects (registration_id, subject_id) VALUES ($1, $2)",
        [regId, subjectId]
      );
    }

    res.json({ message: "School registration successful", regId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.registerCollege = async (req, res) => {
  const { instituteId, universityId, degreeType } = req.body;
  try {
    await pool.query(
      `INSERT INTO college_registrations (institute_id, university_id, degree_type) 
       VALUES ($1, $2, $3)`,
      [instituteId, universityId, degreeType]
    );
    res.json({ message: "College registration successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.registerCompetitiveExam = async (req, res) => {
  const { instituteId, examTypeId } = req.body;
  try {
    await pool.query(
      `INSERT INTO competitive_exam_registrations (institute_id, exam_type_id) 
       VALUES ($1, $2)`,
      [instituteId, examTypeId]
    );
    res.json({ message: "Exam center registration successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};