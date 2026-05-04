package com.odontolyt.controller;

import com.odontolyt.model.Usuario;
import com.odontolyt.service.RecaptchaService;
import com.odontolyt.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private RecaptchaService recaptchaService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody Map<String, Object> payload) {
        String captchaToken = (String) payload.get("captchaToken");
        
        if (!recaptchaService.isValid(captchaToken)) {
            return ResponseEntity.badRequest().body("reCAPTCHA inválido");
        }

        // Logic to extract user data and save
        // ... validation ...
        
        return ResponseEntity.ok("Usuario registrado exitosamente");
    }
}
