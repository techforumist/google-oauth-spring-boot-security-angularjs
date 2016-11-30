package org.techforumist.google.oauth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;

/**
 * @author Sarath Muraleedharan
 *
 */
@SpringBootApplication
@EnableOAuth2Sso
public class GoogleOauthSpringBootSecurityAngularjsApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoogleOauthSpringBootSecurityAngularjsApplication.class, args);
	}
}
