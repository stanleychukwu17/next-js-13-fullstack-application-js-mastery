import { pool } from '../db'
import {show_bad_message, show_good_message} from '../functions/utils'
import {newPromptProps} from '../types/prompts'

export async function create_a_new_prompt(newPrompt:newPromptProps) {
    const {prompt, tag} = newPrompt;

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

}