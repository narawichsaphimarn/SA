package com.G18.SA.NS.repository;
import com.G18.SA.NS.entity.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestController
@CrossOrigin(origins = "http://localhost:4200")

public interface GenderRepository extends JpaRepository<Gender, Long> {
    @Query("SELECT t FROM Gender t WHERE t.genderName = :Name")
    Gender findByGender(@Param ("Name") String name);
}