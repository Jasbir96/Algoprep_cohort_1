// function
const { getUserWishlist } = require("../../controllers/UserController")

const UserModel = require('../../model/UserModel');

jest.mock('../../model/UserModel');

describe("View wishlist", () => {
    it("should show the data", async () => {
        // req ,res 
        const req = {
            userId: "1234",
        }
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
        // input
        UserModel.findById.mockResolvedValue({
            wishlist: [{ id: "abc" }, { id: "xyz" }],
            name: "Jasbir"
        });

        await getUserWishlist(req, res);
        // verify 
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            data: [{ id: "abc" }, { id: "xyz" }],
            status: "success"
        })
    })
    it("should throw an error ", async () => {
        const req = {
            userId: "1234",
        }
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
        UserModel.findById.mockRejectedValue({
            message: "rejected value"
        });

        await getUserWishlist(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        
        expect(res.json).toHaveBeenCalledWith({
            message: "rejected value",
            status:"failure"
        })
    })
})

