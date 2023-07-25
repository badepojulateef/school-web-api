"use strict";
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				});
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step(
				(generator = generator.apply(thisArg, _arguments || [])).next()
			);
		});
	};
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4001;
// Root URI call
app.get("/", (req, res) =>
	/* eslint-disable require-yield */
	__awaiter(void 0, void 0, void 0, function* () {
		res.status(200).send("/api/v0/");
	})
);
app.get("/users", (req, res) =>
	/* eslint-disable require-yield */
	__awaiter(void 0, void 0, void 0, function* () {
		const users = [
			{
				id: 1,
				name: "Leanne Graham",
				username: "Bret",
				email: "Sincere@april.biz",
				address: {
					street: "Kulas Light",
					suite: "Apt. 556",
					city: "Gwenborough",
					zipcode: "92998-3874",
					geo: {
						lat: "-37.3159",
						lng: "81.1496",
					},
				},
				phone: "1-770-736-8031 x56442",
				website: "hildegard.org",
				company: {
					name: "Romaguera-Crona",
					catchPhrase: "Multi-layered client-server neural-net",
					bs: "harness real-time e-markets",
				},
			},
			{
				id: 2,
				name: "Ervin Howell",
				username: "Antonette",
				email: "Shanna@melissa.tv",
				address: {
					street: "Victor Plains",
					suite: "Suite 879",
					city: "Wisokyburgh",
					zipcode: "90566-7771",
					geo: {
						lat: "-43.9509",
						lng: "-34.4618",
					},
				},
				phone: "010-692-6593 x09125",
				website: "anastasia.net",
				company: {
					name: "Deckow-Crist",
					catchPhrase: "Proactive didactic contingency",
					bs: "synergize scalable supply-chains",
				},
			},
		];
		return res.status(200).json(users);
	})
);
app.listen(port, () => {
	console.log(`server running on ${port}`);
	console.log(`press CTRL+C to stop server`);
});
//# sourceMappingURL=index.js.map
