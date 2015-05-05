module.exports = function(error, req, res, next) {
  var e, info, message, stack, trace;
  if (!error) {
    return next();
  }
  if (error.info != null) {
    message = error.message;
    error = error.info;
  } else {
    if (typeof error === "object") {
      message = "An error occured";
    } else {
      message = error;
      error = void 0;
    }
  }
  if (error === void 0) {
    if (message.code != null) {
      return res.send({
        success: false,
        error: message
      }, message.code);
    } else {
      return res.send({
        success: false,
        error: message
      });
    }
  }
  info = error.toString();
  if (info.indexOf("Error:") >= 0) {
    stack = st.get(st.parse(error));
    trace = [];
    stack.forEach(function(item) {
      return trace.push({
        "function": item.getFunctionName(),
        line: item.getLineNumber(),
        file: item.getFileName(),
        method: item.getMethodName()
      });
    });
    try {
      info = JSON.parse(info.replace("Error: ", ""));
    } catch (_error) {
      e = _error;
      console.log(e);
    }
  } else {
    trace = void 0;
  }
  return res.send({
    success: false,
    message: message,
    error: error,
    trace: trace,
    info: info
  });
};