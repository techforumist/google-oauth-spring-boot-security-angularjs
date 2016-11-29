package org.techforumist.google.oauth.web;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserRestController {
	@RequestMapping("/user")
	public Principal sayHello(Principal principal) {
		return principal;
	}

}
