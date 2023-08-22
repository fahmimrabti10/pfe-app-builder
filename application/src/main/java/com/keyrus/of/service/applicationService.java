package com.keyrus.of.service;

import com.keyrus.of.model.application;
import com.keyrus.of.repository.applicationRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.Date;
import java.util.List;
@ApplicationScoped
public class applicationService {
    @Inject
    applicationRepository applicationRepository;

    public application addapplication(application app) {
        application app1 = new application();
        app1.setAppName(app.getAppName());
        app1.setCreatedAt(new Date());
        app1.setUpdatedAt(new Date());
        app1.setUserId(app.getUserId());
        applicationRepository.persist(app1);
        return app1;
    }
    public List<application> getAll(String user){
        return applicationRepository.find("userId", user ).list();
    }

}
