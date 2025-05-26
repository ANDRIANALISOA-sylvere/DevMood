const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("devmood.showPanel", () => {
      const panel = vscode.window.createWebviewPanel(
        "devmoodPanel",
        "DevMood",
        vscode.ViewColumn.One,
        { enableScripts: false }
      );

      panel.webview.html = getWebviewContent();
    })
  );
  const disposable = vscode.commands.registerCommand(
    "devmood.helloWorld",
    function () {
      vscode.window.showInformationMessage("Hello from me!");
    }
  );

  const StatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );

  StatusBarItem.text = "😊 DevMood";
  StatusBarItem.tooltip = "Afficher DevMood";
  StatusBarItem.command = "devmood.showPanel";
  StatusBarItem.show();

  context.subscriptions.push(disposable, StatusBarItem);
}

function getWebviewContent() {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body{
          font-family: sans-serif;
          padding: 1em;
        }
        h2{
          color: #007acc;
        }
        .section{
          margin-bottom: 1em
        }
      </style>
    </head>
    <body>
      <h2>Humeur actuelle</h2>
      <div class="section">Vous semblez concentré et productif.</div>
      <h2>Statistiques</h2>
      <div class="section">
        Fichiers modifiés : 3 <br/>
        Erreurs : 1 <br/>
        Temps actif : 24 min
      </div>

      <h2>Conseils</h2>
      <div class="section">
        Pensez à faire une pause toutes les 50 minutes.
      </div>
    </body>
  </html>`;
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
