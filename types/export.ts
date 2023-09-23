import { Conversation, Message } from './chat';
import { FolderInterface } from './folder';
import { Prompt } from './prompt';
import { SystemPrompt } from './system-prompt';

export type SupportedExportFormats = AgentXExportFormatV1;
export type LatestExportFormat = AgentXExportFormatV1;

export interface AgentXExportFormatV1 {
  app: 'AgentX';
  version: 1;
  conversations: Conversation[];
  folders: FolderInterface[];
  message_templates: Prompt[];
  system_prompts: SystemPrompt[];
}
