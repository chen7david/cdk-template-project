enum StageOption {
    SANDBOX = 'sandbox',
    PRODUCTION = 'production',
}

export interface IProjectConfig {
    prefix: string
    tableName: string
    stage: StageOption
}

export const setStage = (state: string | null | undefined) => {
    return state === StageOption.SANDBOX ? StageOption.SANDBOX : StageOption.PRODUCTION
}

export const ProjectConfig: IProjectConfig = {
    prefix: process.env.PROJECT_PREFIX || 'project-name',
    tableName: process.env.PROJECT_TABLE_NAME || 'project-table-name',
    stage: setStage(process.env.PROJECT_STAGE),
}