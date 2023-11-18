import { pool } from '../db'
import {show_bad_message, show_good_message} from '../functions/utils'
import {newPromptProps} from '../types/prompts'
import { errorLogger } from '../logger';

export async function create_a_new_prompt(newPrompt:newPromptProps) {
    const {prompt, tag, loggedInDts:{user_id}} = newPrompt;

    const checks_array = [prompt, tag] // want to make sure all fields are not less than zero
    let found_an_empty_value = false

    // checks to make sure all fields are not less than zero in length
    checks_array.forEach(item => {
        if (typeof item === 'undefined' || item.length <= 0) {
            found_an_empty_value = true
        }
    })

    if (found_an_empty_value) {
        return show_bad_message('please fill up all the required fields, some fields are empty')
    }

    // saves the new prompt
    try {
        const promptAdded = await pool.query(
            "INSERT INTO prompts (user_id, prompt, tag, date_added) VALUES ($1, $2, $3, now()) RETURNING *",
            [user_id, prompt, tag]
        )
        return show_good_message('Your prompt has been added')
    } catch (err:any) {
        errorLogger.error({pre:'Could not save a prompt to the database'}, err.message);
        return show_bad_message('Could not save your information to the database, please contact our customer support for assistance');
    }
}