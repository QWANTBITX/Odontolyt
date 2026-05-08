package com.odontolyt.repository;

import com.odontolyt.model.Mensaje;
import com.odontolyt.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface MensajeRepository extends JpaRepository<Mensaje, UUID> {
    List<Mensaje> findByReceptorOrderByFechaEnvioDesc(Usuario receptor);
    List<Mensaje> findByEmisorAndReceptorOrderByFechaEnvioAsc(Usuario emisor, Usuario receptor);
}
