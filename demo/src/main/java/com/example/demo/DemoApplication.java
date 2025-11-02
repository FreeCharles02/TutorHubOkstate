package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		String sql = "SELECT * FROM Student";
		String sql2 = "SELECT * FROM Tutor";
		List<Student> returnSql = jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Student.class));
		List<Tutor> returnSql2 = jdbcTemplate.query(sql2, BeanPropertyRowMapper.newInstance(Tutor.class));
		returnSql.forEach((s) -> System.out.println("Student: " + s.getName() + " " + s.getGrade() + " " + s.getMajor() + " " + s.getRating()));
   		returnSql2.forEach(t -> System.out.println("Tutors: " + t.getName() + " " + t.getGrade()  + " " + t.getRating()));
	}

	// Simple Student POJO used for row mapping
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
