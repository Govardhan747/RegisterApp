package com.vwits.sdcplaner.restController;

import com.vwits.sdcplaner.model.User;
import com.vwits.sdcplaner.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserRestController {

    @Autowired
    private UserService service;



    @GetMapping("/allUser")
    public List<User> findAll(){
        return this.service.findAllUser();
    }
    @PostMapping("/registerUser")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> registerUser(@RequestBody User user) throws Exception {
        System.out.println(user);
            String tempEmailId = user.getEmailId();
            if (tempEmailId != null) {
                User userObj = service.fetchUserByEmailId(tempEmailId);
                if (userObj != null)
                    throw new Exception("User with" + tempEmailId + "is already present");
                else{
                    userObj = service.saveUser(user);
                    return new ResponseEntity<>("success", HttpStatus.OK);
                }
            }

            return null;


        }
@PostMapping("/login")
@CrossOrigin(origins = "http://localhost:4200")
        public ResponseEntity<?> performLogin(@RequestBody User user){
        User foudLoginUserModel =  this.service.fetchUserByEmailIdAndPassword(user.getEmailId(),user.getPassword());
        if (foudLoginUserModel.getPassword().equals(user.getPassword())) {
            ResponseEntity<String> entity=new ResponseEntity<String>(foudLoginUserModel.getFirstName(), HttpStatus.OK);
            return entity;
        } else {
            ResponseEntity<String> entity=new ResponseEntity<String>("Not Found", HttpStatus.NOT_FOUND);
            return entity;
        }
    }
    }
