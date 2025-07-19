package com.example.demo.Controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.Repository.*;
import com.example.demo.Model.*;
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userrepo;
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");

        Optional<User> user = userrepo.findByEmailAndPassword(email, password);
        if (user.isPresent()) {
            return ResponseEntity.ok(Map.of("success", true, "user", user.get()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("success", false, "message", "Invalid credentials"));
        }
    }
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        if (userrepo.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("success", false, "message", "Email already exists"));
        }

        user.setRole("USER");
        User saved = userrepo.save(user);
        return ResponseEntity.ok(Map.of("success", true, "user", saved));
    }

}
