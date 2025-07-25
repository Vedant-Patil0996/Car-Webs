package com.example.demo.Repository;

import com.example.demo.Model.*;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long>
{
    Optional<User> findByEmailAndPassword(String email, String password);
    Optional<User> findByEmail(String email);
}