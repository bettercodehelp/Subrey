const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

const { embedPages } = require("../../Handlers/pages");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("the help command"),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   *
   */
  async execute(interaction, client) {
    const embeds = [
      new EmbedBuilder()
        .setColor("#00ffb3")
        .setThumbnail(client.user.displayAvatarURL())
        .setAuthor({
          name: interaction.user.tag,
          iconURL: interaction.member.displayAvatarURL(),
        })
        .setFooter({
          text: "Made With 💖 by Avalynn#4247",
          iconURL:
            "https://media2.giphy.com/media/UtKfCyc9fAzvcJc1Ie/giphy.gif",
        })
        .setDescription(
          `
  • Prefix of this bot is \`/\`
  • Total commands: \`24\`
  • [Get Subrey](https://discord.com/api/oauth2/authorize?client_id=973136576014057482&permissions=8&scope=bot%20applications.commands) | [Support Server](https://discord.gg/HHkuFTy4r4) 
  `
        )
        .addFields(
          {
            name: "__Main__",
            value:
              "<a:tick:962971483443986472> Overview\n<a:about:969846747776028702> Information\n<:zzmod:961505960319406140> Moderation\n<:nsfw:963717747861241866> NSFW\n<:zzticket:961508372031627334> Ticket\n<a:zzgiveaway:961507514128695308> Giveaway\n<a:welcomee:975001204428005376> Welcomer",
            inline: true,
          },
          {
            name: "__Extras__",
            value:
              "<:zzutility:961505575374557214> Setups\n<a:zzmoney:961512215402393610> Economy\n<:youtube:974540617571004446> Notifications\n<:fun:963716831204491294> Minigames\n<a:filters:974295191877996584> Self Roles",
            inline: true,
          }
        ),

      new EmbedBuilder()
        .setTitle("Moderation")
        .setColor("#00ffb3")
        .setThumbnail(client.user.displayAvatarURL())
        .setAuthor({
          name: interaction.user.tag,
          iconURL: interaction.user.displayAvatarURL(),
        })
        .setFooter({
          text: "Made With 💖 by Avalynn#4247",
          iconURL:
            "https://media2.giphy.com/media/UtKfCyc9fAzvcJc1Ie/giphy.gif",
        })
        .addFields(
          {
            name: "Moderation",
            value: "`/mod ban - Bans a user from this guild` \n`/mod kick - Kicks a user from this guild` \n`/mod setnick - Sets the nickname of a user`",
          },
          {
            name: "Welcome and Leave",
            value: "`/events welcome - Welcome a user when they join your server` \n`/events leave - Send a message when a user leaves your server`",
          },
          { 
            name: "Giveaway",
            value: "`/giveaway create - Create a giveaway` \n`/giveaway manage - manage ongoing giveaways`",
          },
          { 
            name: "Ticket",
            value: "`/tickets setup - Set up a ticket system for your server` \n`/tickets delete - Remove the ticket system from your server` \n`/tickets`",
          },
          { 
            name: "Verification",
            value: "`/setup - Set up a verification system for your server` \n`/setrole - Set the verification role`",
          }
        ),
        new EmbedBuilder()
        .setTitle("Fun")
        .setColor("#00ffb3")
        .setThumbnail(client.user.displayAvatarURL())
        .setAuthor({
          name: interaction.user.tag,
          iconURL: interaction.user.displayAvatarURL(),
        })
        .setFooter({
          text: "Made With 💖 by Avalynn#4247",
          iconURL:
            "https://media2.giphy.com/media/UtKfCyc9fAzvcJc1Ie/giphy.gif",
        })
        .addFields(
          {
            name: "Music",
            value: "`/play - Plays the audio of a youtube link or search` \n`/pause - Pauses the audio` \n`/resume - Resumes the audio` \n`/stop - Stops the audio and clears the queue` \n`/queue - Shows the current queue` \n`/skip - Skips the currently playing track and plays the next one in queue` \n`/volume - Change the volume of the audio`",
          },
          {
            name: "Games",
            value: "`/games singleplayer - Play singleplayer games` \n`/games multiplayer - Play multiplayer games with your friends`",
          },
          {
            name: "Anime",
            value: "`/anime hug - Get a random anime hug gif` \n`/anime pat - Get a random anime pat gif` \n`/anime wink - Get a random anime wink gif`",
          }
        ),
        new EmbedBuilder()
        .setTitle("Economy")
        .setColor("#00ffb3")
        .setThumbnail(client.user.displayAvatarURL())
        .setAuthor({
          name: interaction.user.tag,
          iconURL: interaction.user.displayAvatarURL(),
        })
        .setFooter({
          text: "Made With 💖 by Avalynn#4247",
          iconURL:
            "https://media2.giphy.com/media/UtKfCyc9fAzvcJc1Ie/giphy.gif",
        })
        .addFields(
          {
            name: "Economy",
            value: "`/eco work - Work to get money` \n`/eco addcoins - Add coins to a user's wallet` \n`/eco deposit - Deposit coins into the bank` \n`/eco withdraw - Withdraw coins from you bank` \n `/eco search - Search for some coins` \n`/eco chopwood - Chop some wood in the forrest to get coins` \n`/eco fish - Catch some fish to get coins` \n`/eco hunt - Hunt some animals to get coins` \n`/eco weekly - Claim your weekly coins` \n`/eco daily - Claim your daily coins` \n`/eco beg - Beg for money` \n`/eco balance - Check the balance of yourself or anoter user`",
          }
        ),
    ];

    await embedPages(interaction, embeds);
  },
};
