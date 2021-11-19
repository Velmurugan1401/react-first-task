var UserProfile = (function() {
    var full_name = [];
    var state ;
  
    var getName = function() {
      return full_name;    // Or pull this from cookie/localStorage
    };
    var getstate = function() {
        return state;    // Or pull this from cookie/localStorage
      };
    var setName = function(name) {
      full_name = name;
    //   state = state     
      // Also set this in cookie/localStorage
    };
    var setState = function(state) {
        // full_name = name;
        state = state     
        // Also set this in cookie/localStorage
      };
  
    return {
      getName: getName,
      setName: setName,
      setState:setState,
      getstate:getstate
    }
  
  })();
  
  export default UserProfile;