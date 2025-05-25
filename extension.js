const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const disposable = vscode.commands.registerCommand(
    "devmood.helloWorld",
    function () {
      vscode.window.showInformationMessage("Hello from me!");
    }
  );

  vscode.commands.executeCommand("workbench.view.extension.devmood");

  const StatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );

  StatusBarItem.text = "$(smiley) DevMood";
  StatusBarItem.tooltip = "Click this to view your mood";
  StatusBarItem.command = "workbench.view.extension.devmood";
  StatusBarItem.show();

  context.subscriptions.push(disposable, StatusBarItem);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
