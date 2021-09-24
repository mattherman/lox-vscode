import * as vscode from 'vscode';

export class LoxTaskProvider implements vscode.TaskProvider {
	static LoxType = 'lox';

    provideTasks(token: vscode.CancellationToken): vscode.ProviderResult<vscode.Task[]> {
        const runCurrentFile = new vscode.Task(
            { type: LoxTaskProvider.LoxType },
            vscode.TaskScope.Workspace,
            'Run Current File',
            'Lox',
            new vscode.ShellExecution('${workspaceFolder}/run.sh ${relativeFile}'),
            'lox'
        );
        const start = new vscode.Task(
            { type: LoxTaskProvider.LoxType },
            vscode.TaskScope.Workspace,
            'Start Lox',
            'Lox',
            new vscode.ShellExecution('${workspaceFolder}/run.sh')
        );
        return [
            runCurrentFile,
            start
        ];
    }

    resolveTask(task: vscode.Task, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Task> {
        return undefined;
    }
}