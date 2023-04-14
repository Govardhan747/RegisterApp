package com.vwits.sdcplaner.service;

import com.vwits.sdcplaner.model.User;
import com.vwits.sdcplaner.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repo;

    public User saveUser(User user){

        return (User) repo.save(user);
    }

    public User fetchUserByEmailId(String email){
        return repo.findByEmailId(email);
    }

    public User fetchUserByEmailIdAndPassword(String email, String password) {
        return repo.findByEmailIdAndPassword(email,password);
    }

    public List<User> findAllUser() {

        return repo.findAll();
    }


}
