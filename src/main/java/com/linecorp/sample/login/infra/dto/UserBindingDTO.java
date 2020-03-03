package com.linecorp.sample.login.infra.dto;

import lombok.Data;

@Data
public class UserBindingDTO {
    private String userId;
    private String email;
    private String licensePlate;
    private String cellphone;
}
