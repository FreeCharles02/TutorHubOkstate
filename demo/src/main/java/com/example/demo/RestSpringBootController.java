package com.example.demo;

import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;


import com.example.demo.DemoApplication.Student;
import com.example.demo.DemoApplication.Tutor;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/api")
public class RestSpringBootController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }

    @GetMapping("/")
    public String mainPage() {
        return "Backend: Hello World";
    }

    @GetMapping("/find")
    public String loadTutors() {
        String tutorJson = " ";
        String sql = "SELECT * FROM Student";
		String sql2 = "SELECT * FROM Tutor";
		List<Student> returnSql = jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Student.class));
		List<Tutor> returnSql2 = jdbcTemplate.query(sql2, BeanPropertyRowMapper.newInstance(Tutor.class));
		returnSql.forEach((s) -> System.out.println("Student: " + s.getName() + " " + s.getGrade() + " " + s.getMajor() + " " + s.getRating()));
   		returnSql2.forEach(t -> System.out.println("Tutors: " + t.getName() + " " + t.getGrade()  + " " + t.getRating()));
         ObjectMapper objectMapper = new ObjectMapper();
        try {
            tutorJson = objectMapper.writeValueAsString(returnSql2);
            System.out.println(tutorJson);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return tutorJson; 
    }
    
    public static class Student {
		private Long id;
		private String name;
		private String grade;
		private int rating;
		private String major;

		public Student() {
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getGrade() {
			return grade;
		}

		public void setGrade(String grade) {
			this.grade = grade;
		}

		public int getRating() {
			return rating;
		}

		public void setRating(int rating) {
			this.rating = rating;
		}

		public String getMajor() {
			return major;
		}

		public void setMajor(String major) {
			this.major = major;
		}
	}

	public static class Tutor {
		private Long id;
		private String name;
		private String grade;
		private int rating;


		public Tutor() {
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getGrade() {
			return grade;
		}

		public void setGrade(String grade) {
			this.grade = grade;
		}

		public int getRating() {
			return rating;
		}

		public void setRating(int rating) {
			this.rating = rating;
		}
	}
}
