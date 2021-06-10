module.exports = (database) => {
  const sessionController = {};

  /**
   * startSession - create and save a new Session into the database.
   */
  sessionController.startSession = async (req, res, next) => {
    try{
      console.log('ssid in sessionController:',res.locals.ssid);
      await database.startSession(res.locals.ssid);
      return next()
    } catch(err){
      return next({
        log: `Error in sessionController.startSession. ${err}`  
      });
    }
  }
  
  sessionController.isLoggedIn = async (req, res, next) => {
    const ssid = res.locals.ssid || req.cookies.ssid;
    if(!ssid) return res.status(401).redirect('/login')
    try{
      const session = await database.retrieveSession(ssid);
      const timestamp = new Date();
      if(!session){
        console.log('session not found');
        return res.status(401).redirect('/login');
      }
      if (timestamp > session.valid_until){
        await database.clearSession(ssid);
        console.log('session expired');
        return res.status(401).redirect('/login');
      }
      await database.refreshSession(ssid);
      return next()
      
    }catch(err){
      return next({
        log: `Error in sessionController.isLoggedIn. ${err}`  
      });
    }    
  };
  

  return sessionController;
}
