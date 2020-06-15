class Jeu2 extends Phaser.Scene {
	constructor(){
		super('Jeu2')
	}

	init(){}

	preload(){}

	create(){

		// fond // 

        this.add.image(960, 540, 'Jeu2').setScale(0.30);

        // joueur // 

        player = this.add.sprite(960,540, 'Bateau_joueur').setdepth(2);
        player.setCollideWorldBounds(true);

        // création des animations du joueur //

        this.anims.create({
        	key: 'left',
        	frames: this.anims.generateFrameNumbers('Bateau_joueur', {start: 0, end: 29}),
        	frameRate: 5,
        	repeat: -1
        });

        this.anims.create({
        	key: 'stop',
        	frames: this.anims.generateFrameNumbers('Bateau_joueur', {start: 0, end: 1}),
        	frameRate: 5,
        	repeat: -1
        });

}

	update(){
		
		// configuration des touches //
		if (cursors.left.isDown && cursors.right.isUp){
			player.anims.play('left', true);
			player.setFlipX(false);
			player.setVelocityX(-120);
			player.setVelocityY(0);
		}
		else if (cursors.right.isDown && cursors.left.isUp){
			player.anims.play('left', true);
			player.setFlipX(true);
			player.setVelocityX(120);
			player.setVelocityY(0);
		}
		else if (cursors.right.isUp && cursors.left.isUp){
			player.anims.play('stop', true);
			player.setFlipX(false);
			player.setVelocityX(0);
			player.setVelocityY(0);
		}
}
}