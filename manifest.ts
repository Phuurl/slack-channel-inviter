import { Manifest } from "deno-slack-sdk/mod.ts";
import { ChannelInviteWorkflow } from "./workflows/invite.ts";

export default Manifest({
  name: "Channel Inviter",
  description: "Workflow to automatically add users to channels",
  icon: "assets/icon.png",
  functions: [],
  workflows: [ChannelInviteWorkflow],
  outgoingDomains: [],
  botScopes: [
    // Required scopes as per https://api.slack.com/reference/functions/invite_user_to_channel
    "channels:manage",
    "groups:write",
  ],
});
