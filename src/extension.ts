import * as vscode from 'vscode';
import { LoxTaskProvider } from './loxTaskProvider';

let loxTaskProvider: vscode.Disposable | undefined;

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Activate: lox-language-support');
	loxTaskProvider = vscode.tasks.registerTaskProvider(LoxTaskProvider.LoxType, new LoxTaskProvider());
}

export function deactivate() {
	console.log('Deactivate: lox-language-support');
	if (loxTaskProvider) {
		loxTaskProvider.dispose();
	}
}
