const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");
const ms = require("ms");
const schema = require("../../../Schemas/currencySchema");

module.exports = {
  subCommand: "eco.beg",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   *
   */
  async execute(interaction, client) {
    let amount = Math.floor(Math.random() * 1000) + 100;

    let data;
    try {
      data = await schema.findOne({
        userId: interaction.user.id,
      });

      if (!data) {
        data = await schema.create({
          userId: interaction.user.id,
          guildId: interaction.guild.id,
        });
      }
    } catch (err) {
      console.log(err);
      await interaction.reply({
        content: "There was an error while executing this command...",
        ephemeral: true,
      });
    }

    let timeout = 30000;

    if (timeout - (Date.now() - data.begTimeout) > 0) {
      let timeLeft = ms(timeout - (Date.now() - data.begTimeout));

      await interaction.reply({
        content: `You are on cooldown, please wait for more **${timeLeft}** to use this command again.`,
      });
    } else {
      data.begTimeout = Date.now();
      data.wallet += amount * 1;
      await data.save();

      const begEmbed = new EmbedBuilder()
        .setColor("#0155b6")
        .setDescription(
          `You begged and recieved **:coin: ${amount.toLocaleString()}**`
        );

      await interaction.reply({
        embeds: [begEmbed],
      });
    }
  },
};
