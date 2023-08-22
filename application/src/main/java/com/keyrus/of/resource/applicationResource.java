package com.keyrus.of.resource;

import com.keyrus.of.model.User;
import com.keyrus.of.model.application;
import com.keyrus.of.service.applicationService;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/application")
public class applicationResource {

    @Inject
    applicationService applicationService;


    @POST
    @Path("/all")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response getAllApplications(User user) {
        return Response.ok(applicationService.getAll(user.getUserName())).build();
    }
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addapplication(application application) {
        application createdapplication = applicationService.addapplication(application);
        return Response.ok(createdapplication).build();
    }

}
