package app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.entities.Section;
import app.entities.Subject;
import app.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	public List<User> findAll();
	public User findByUserPk(Long userPk);
	public void deleteByUserPk(Long userPk);
	public User findByUsername(String username);
}
