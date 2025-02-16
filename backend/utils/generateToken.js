import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d',
        });
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development', 
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });

}

/**
 * JWT stands for JSON Web Token 
 * A JWT is a compact, URL-safe means of representing claims to be transferred between two parties.
 * The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) 
 * structure or as the plaintext of a JSON Web Encryption (JWE) structure, 
 * enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.
 * 
 *  Generates a JWT token for the user.
 *  @param {Object} req - The request object.
 *  @param {Object} res - The response object.
 *  @param {String} userId - The ID of the user.
 *  @returns {String} - The JWT token.
 * @example
 * const token = generateToken(res, user._id);
 * res.status(201).json({
 *    _id: user._id,
 *   name: user.name,
 *  email: user.email,
 * token,
 * });
 */ 
// This is a utility function that generates a JWT token for the user
 

export default generateToken;
