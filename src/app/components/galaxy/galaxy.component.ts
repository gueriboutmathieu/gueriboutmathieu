import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as three from "three";

@Component({
	selector: 'app-galaxy',
	templateUrl: './galaxy.component.html',
	styleUrls: ['./galaxy.component.scss']
})
export class GalaxyComponent implements AfterViewInit {

	renderer: three.WebGLRenderer = new three.WebGLRenderer();
	scene: three.Scene;
	camera: three.PerspectiveCamera;
	starGeo: three.Geometry;
	stars: three.Points;

	@ViewChild('galaxy') galaxy: ElementRef;

	constructor() {
		this.scene = new three.Scene();

		this.camera = new three.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
		this.camera.position.z = 1;
		this.camera.rotation.x = Math.PI / 2;

		this.starGeo = new three.Geometry();
		for (let i = 0; i < 10000; i++) {
			let star = new three.Vector3(
				Math.random() * 600 - 300,
				Math.random() * 600 - 300,
				Math.random() * 600 - 300
			);
			star.velocity = 0;
			star.acceleration = 0.02;
			this.starGeo.vertices.push(star);
		}

		let sprite = new three.TextureLoader().load('../../../assets/images/star.png');
		let starMaterial = new three.PointsMaterial({
			color: 0xaaaaaa,
			size: 0.7,
			map: sprite
		});

		this.stars = new three.Points(this.starGeo, starMaterial);
		this.scene.add(this.stars);
	}

	ngAfterViewInit(): void {
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.galaxy.nativeElement.appendChild(this.renderer.domElement);

		this.animate();
	}


	animate() {
		this.starGeo.vertices.forEach(p => {
			p.velocity += p.acceleration
			p.y -= p.velocity;

			if (p.y < -200) {
				p.y = 200;
				p.velocity = 0;
			}
		});
		this.starGeo.verticesNeedUpdate = true;
		this.stars.rotation.y +=0.002;

		window.requestAnimationFrame(() => this.animate());
		this.renderer.render(this.scene, this.camera);
	}
}
