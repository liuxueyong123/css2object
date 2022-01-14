import * as vscode from 'vscode';

const convertText = (selection: string) => {
	let result = '';

	for(const item of selection.split(';')) {
		let [key, value] = item.split(":");
		if(!key || !value) {
			continue;
		}

		if(key.includes('-')) {
			const index = key.indexOf('-');
			key = `${key.slice(0, index)}${key[index + 1].toLocaleUpperCase()}${key.slice(index + 2)}`;
		}

		if(value.startsWith(' ')) {
			value = value.slice(1);
		}
		 
		result += `${key}: '${value}',`;
	}

	return result;
};

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('css2object.css2object', async () => {
		const editor = vscode.window.activeTextEditor;
		if(!editor) {return;}
		const allSelections = editor.selections;

		editor.edit(editBuilder => {
			// 遍历并替换文本
			allSelections.forEach(selection => {
				const text = editor.document.getText(selection);
				editBuilder.replace(selection, convertText(text));
			});
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}