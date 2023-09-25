module.exports = {
  meta: {
    type: "problem",
    hasSuggestions: true,
    fixable: true
  },
  create: (context) => {
    return {
      MemberExpression(node) {
        //console.log(node.object.name, node.property.name);
        if (node.object.name === "console" && node.property.name === "log") {
          context.report({
            node,
            message: "Do not use console.log",
  
            fix(fixer) {
              //console.log(fixer);
              return fixer.insertTextBefore(node, "//");
            }
          });
        }
      }
    };
  }
};
