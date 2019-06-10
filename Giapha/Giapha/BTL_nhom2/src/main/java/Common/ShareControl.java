package Common;

import java.sql.Connection;

public interface ShareControl {
	public ConnectionPool getCP();
	public void releaseConnection();
}
