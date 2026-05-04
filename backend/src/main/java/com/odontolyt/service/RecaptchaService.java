package com.odontolyt.service;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class RecaptchaService {

    @Value("${google.recaptcha.secret}")
    private String secretKey;

    @Value("${google.recaptcha.verify-url}")
    private String verifyUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    public boolean isValid(String token) {
        if (token == null || token.isEmpty()) {
            return false;
        }

        String url = String.format("%s?secret=%s&response=%s", verifyUrl, secretKey, token);
        
        try {
            Map<String, Object> response = restTemplate.postForObject(url, null, Map.class);
            return response != null && (Boolean) response.get("success");
        } catch (Exception e) {
            return false;
        }
    }
}
