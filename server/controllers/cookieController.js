const crypto = require('crypto');

module.exports = (database) => {

  const cookieController = {};
  /**
  * setCookie - set a cookie with a random number
  */
  cookieController.setCookie = (req, res, next) => {
    res.cookie('ScrumFam', 'valid');
    res.cookie('secret', Math.floor(Math.random() * 100000));
    return next();
  }
  
  /**
  * setSSIDCookie - store the user id in a cookie
  */
  cookieController.setSSIDCookie = (req, res, next) => {
    // write code here
    const ssid = crypto.randomBytes(12).toString('hex')
    res.locals.ssid = ssid;
    res.cookie('ssid', ssid, {httpOnly: true})
    return next();
  }

  return cookieController;
}
