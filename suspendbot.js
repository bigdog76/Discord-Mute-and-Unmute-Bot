module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Suspended');
            let memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted`);
        } else{
            message.channel.send('Cant find that member');
        }
    }
}