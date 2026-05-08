package com.odontolyt.controller;

import com.odontolyt.model.Mensaje;
import com.odontolyt.model.Usuario;
import com.odontolyt.repository.MensajeRepository;
import com.odontolyt.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/mensajes")
@CrossOrigin(origins = "*")
public class MensajeriaController {

    @Autowired
    private MensajeRepository mensajeRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/recibidos/{usuarioId}")
    public List<Mensaje> getMensajesRecibidos(@PathVariable UUID usuarioId) {
        Usuario receptor = usuarioRepository.findById(usuarioId).orElseThrow();
        return mensajeRepository.findByReceptorOrderByFechaEnvioDesc(receptor);
    }

    @PostMapping("/enviar")
    public ResponseEntity<?> enviarMensaje(@RequestBody MensajeDTO dto) {
        Usuario emisor = usuarioRepository.findById(dto.getEmisorId()).orElseThrow();
        Usuario receptor = usuarioRepository.findById(dto.getReceptorId()).orElseThrow();

        Mensaje mensaje = Mensaje.builder()
                .emisor(emisor)
                .receptor(receptor)
                .contenido(dto.getContenido())
                .fechaEnvio(LocalDateTime.now())
                .leido(false)
                .build();

        mensajeRepository.save(mensaje);
        return ResponseEntity.ok("Mensaje enviado");
    }

    // DTO Inner class for convenience
    public static class MensajeDTO {
        private UUID emisorId;
        private UUID receptorId;
        private String contenido;
        
        // Getters and Setters
        public UUID getEmisorId() { return emisorId; }
        public void setEmisorId(UUID emisorId) { this.emisorId = emisorId; }
        public UUID getReceptorId() { return receptorId; }
        public void setReceptorId(UUID receptorId) { this.receptorId = receptorId; }
        public String getContenido() { return contenido; }
        public void setContenido(String contenido) { this.contenido = contenido; }
    }
}
