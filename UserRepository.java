package com.vwits.sdcplaner.repository;

import com.vwits.sdcplaner.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    public User findByEmailId(String emailId);

    public User findByEmailIdAndPassword(String emailId, String password);

}
