import os
import tensorflow as tf
import time

def get_script(prompt):

    model = tf.saved_model.load(os.path.join('one_step'))

    start = time.time()
    states = None
    next_char = tf.constant([prompt])
    result = [next_char]

    for n in range(8192):
      next_char, states = model.generate_one_step(next_char, states=states)
      result.append(next_char)

    result = tf.strings.join(result)
    end = time.time()

    print(start-end)
    return result[0].numpy().decode('utf-8')
